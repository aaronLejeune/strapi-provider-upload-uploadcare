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
          .then(image => {
            console.log(image)

            file.previewUrl = image.cdnUrl;
            file.url = image.cdnUrl;

            file.provider_metadata = {
              uuid: image.uuid,
              original_filename: image.originalFilename,
              image_info: image.imageInfo,
            }; 
            console.log(file)
            resolve();
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

