# @aaron_lejeune/strapi-provider-upload-uploadcare

## Resources

- [LICENSE](LICENSE)

## Links

- [Strapi website](https://strapi.io/)
- [Strapi documentation](https://docs.strapi.io)
- [Strapi community on Discord](https://discord.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)

## Installation

```bash
# using yarn
yarn add @aaron_lejeune/strapi-provider-upload-uploadcare

# using npm
npm install @aaron_lejeune/strapi-provider-upload-uploadcare --save
```

## Configuration

- `provider` defines the name of the provider
- `providerOptions` is passed down during the construction of the provider.
- `actionOptions` is passed directly to each method respectively allowing for custom options. You can find the complete list of [upload/ uploadStream options](https://cloudinary.com/documentation/image_upload_api_reference#upload_optional_parameters) and [delete options](https://cloudinary.com/documentation/image_upload_api_reference#destroy_optional_parameters)

See the [documentation about using a provider](https://docs.strapi.io/developer-docs/latest/plugins/upload.html#using-a-provider) for information on installing and using a provider. To understand how environment variables are used in Strapi, please refer to the [documentation about environment variables](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/environment.html#environment-variables).

Your configuration is passed down to the uploadcare configuration. (e.g: `UploadClient({})`). You can see the complete list of options [here](https://github.com/uploadcare/uploadcare-upload-client#high-level-api)

See the [using a provider](https://strapi.io/documentation/v3.x/plugins/upload.html#using-a-provider) documentation for information on installing and using a provider. And see the [environment variables](https://strapi.io/documentation/v3.x/concepts/configurations.html#environment-variables) for setting and using environment variables in your configs.

### Provider Configuration

`./config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'strapi-provider-upload-uploadcare',
      providerOptions: {
        public_key: env('UPLOADCARE_PUBLIC_KEY'),
        secret_key: env('UPLOADCARE_SECRET_KEY'),
        base_cdn: env('UPLOADCARE_BASE_CDN'),
      },
    },
  },
  // ...
});
```

https://github.com/uploadcare/uploadcare-upload-client#settings

`public_key: string`
The main use of a `public_key` is to identify a target project for your uploads. It is required when using Upload API.

`base_cdn: string`
Defines your schema and CDN domain. Can be changed to one of the predefined values (https://ucarecdn.com/) or your custom CNAME.

Defaults to `https://ucarecdn.com/`.

### Security Middleware Configuration

Due to the default settings in the Strapi Security Middleware you will need to modify the `contentSecurityPolicy` settings to properly see thumbnail previews in the Media Library. You should replace `strapi::security` string with the object bellow instead as explained in the [middleware configuration](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/middlewares.html#loading-order) documentation.

`./config/middlewares.js`

```js
module.exports = [
  // ...
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["
            'self'", 
            'data:', 
            'blob:', 
            'ucarecdn.com', //uploadcare 
            '-- your custom base_cdn', //custom base_cdn
          ],
          'media-src': ["
            'self'", 
            'data:', 
            'blob:', 
            'ucarecdn.com', //uploadcare 
            '-- your custom base_cdn', //custom base_cdn
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // ...
];
```