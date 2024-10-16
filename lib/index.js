"use strict";

/**
 * Module dependencies
 */

//import { UploadClient } from '@uploadcare/upload-client'
//import axios from 'axios'

const axios = require('axios');

module.exports = {
  init(providerOptions) {

    const publicKey = providerOptions.public_key;
    const secretKey = providerOptions.secret_key;
    const baseCDN = providerOptions.base_cdn || 'https://ucarecdn.com';

    const uploadSomething = async (file, customConfig = {}) => {

      let fileToUse = ''

      if(file.buffer === undefined){
        fileToUse = file.stream
      }else{
        fileToUse = file.buffer
      }

      const { UploadClient }  = await import('@uploadcare/upload-client');

      const client = new UploadClient({
        publicKey: providerOptions.public_key,
      });

      return new Promise((resolve, reject) => {
        client
          .uploadFile(fileToUse, {fileName: file.name, contentType: file.mime, baseCDN: baseCDN})
          .then(async image => {
            console.log(image)

            file.previewUrl = image.cdnUrl;
            file.url = image.cdnUrl;

            file.provider_metadata = {
              uuid: image.uuid,
              original_filename: image.originalFilename,
              image_info: image.imageInfo,
            }; 
            
            if(file.mime.includes('video')){
              console.log("---------------- includes video -------------------")
              await convertVideo(media.uuid).then(() => resolve()); // move resolve into then callback
            }else{
              console.log("---------------- is not video -------------------")
              resolve();
            }

          }, (err) => {
            console.log('-----errr-------', err)
            if (err) {
              if (err.message.includes('File size too large')) {
                return reject(reject(new Error(`Sorry, file is to large`)));
              }
              return reject(new Error(`Error uploading to uploadcare: ${err.message}`));
            }
          })
      });
    }

    const convertVideo = async (uuid) => {
      console.log("---------------- starting conversion -------------------")
      const resolutions = providerOptions.video_size || ['x720', 'x1024']
      const videoSizes = resolutions.map(size => `${uuid}/video/-/size/${size}/-/thumbs~1/yes/`),

      const { 
        conversionJobPoller,
        ConversionType,
        UploadcareSimpleAuthSchema
       } = await import('@uploadcare/rest-client');

      const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
        publicKey: providerOptions.public_key,
        secretKey: providerOptions.secret_key,
      })

      const abortController = new AbortController()

      const jobs = await conversionJobPoller(
        {
          type: ConversionType.VIDEO,
          onRun: response => console.log(response), // called when job is started
          onStatus: response => console.log(response), // called on every job status request
          paths: videoSizes,
          store: true,
          pollOptions: {
            signal: abortController.signal
          }
        },
        { 
          authSchema: uploadcareSimpleAuthSchema 
        }
      )
      console.log("---------------- Jobs -------------------")
      console.log(jobs)
      const results = Promise.allSettled(jobs)
      console.log("---------------- conversion done -------------------")
      console.log("---------------- results: --------------------------")
      console.log(results)
    }

    return {  
      /*
      uploadStream(file, customParams = {}) {
        return uploadSomething(file, customParams, 'stream');
      },*/
      upload(file, customParams = {}) {
        return uploadSomething(file, customParams);
      },
      delete(file){
        return new Promise((resolve, reject) => {
          const uuid = file.provider_metadata.uuid;

          if (uuid && secretKey) {
            return axios.delete(`https://api.uploadcare.com/files/${uuid}/`, {
              headers: {
                'Authorization': `Uploadcare.Simple ${publicKey}:${secretKey}`
              }
            }).catch((err) => {
              return reject(new Error(`Error delete file: ${err.message}`));
            }).then(() => {
              resolve();
            });
          } else {
            return reject(new Error(`Error delete file: ${err.message}`));
          }
        });
      },
    }
  }
}

