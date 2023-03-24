"use strict";

/**
 * Module dependencies
 */

    // Public node modules.
const uploadcare = require('@uploadcare/upload-client').default;
const axios = require('axios').default;

module.exports = {
  init(providerOptions) {
    const client = new uploadcare({
      publicKey: providerOptions.public_key
    });
    const publicKey = providerOptions.public_key;
    const secretKey = providerOptions.secret_key;
    const baseCDN = providerOptions.base_cdn || 'https://ucarecdn.com';

    console.log(publicKey, secretKey, baseCDN)

    const uploadFile = (file, customConfig = {}) => {
      return new Promise((resolve, reject) => {
        client
          .uploadFile(file.buffer, {fileName: file.name, baseCDN: baseCDN,})
          .then(image => {

            // file.previewUrl = image.cdnUrl;
            file.url = image.cdnUrl;

            file.provider_metadata = {
              uuid: image.uuid,
              original_filename: image.originalFilename,
              image_info: image.imageInfo,
            };
            resolve();
          }, (err) => {
            console.log(err)
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
      uploadStream(file, customParams = {}) {
        return uploadFile(file, customParams);
      },
      upload(file, customParams = {}) {
        return uploadFile(file, customParams);
      },
      delete: (file) => {
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
    };
  },
};