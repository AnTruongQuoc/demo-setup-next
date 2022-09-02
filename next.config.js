/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const withPlugins = require('next-compose-plugins');
// const { withSentryConfig } = require("@sentry/nextjs");

// const moduleExports = {
//   sentry: {
//     disableServerWebpackPlugin: true,
//     disableClientWebpackPlugin: true,
//   },
// };

//Sentry config
// const SentryWebpackPluginOptions = {
// Additional config options for the Sentry Webpack plugin. Keep in mind that
// the following options are set automatically, and overriding them is not
// recommended:
//   release, url, org, project, authToken, configFile, stripPrefix,
//   urlPrefix, include, ignore

// silent: true, // Suppresses all logs
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options.
// };

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
const nextConfig = (phase) => {
  console.log('inside nextConfig: ', phase);
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  // when `next build` or `npm run build` is used
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  console.log(`isDev:${isDev}  isProd:${isProd}  isStaging:${isStaging}`);

  const env = {
    RESTURL_WHALEFRAC: (() => {
      if (isDev) return 'http://localhost:8000'; // dev api
      if (isProd) {
        return 'https://localhost:9000'; // production api
      }
      if (isStaging) return 'https://localhost:6000'; // staging api
      return 'ESTURL_WHALEFRAC::not (isDev,isProd && !isStaging,isProd && isStaging)';
    })(),
  };

  // next.config.js object
  return {
    env,
    staticPageGenerationTimeout: 1000,
    reactStrictMode: true,
  };
};

const webpackConfig = (config) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
};

module.exports = (phase, { defaultConfig }) => {
  const nextCustomConfig = nextConfig(phase);

  return withPlugins(
    [
      // [withSentryConfig(moduleExports, SentryWebpackPluginOptions)],
    ],
    {
      ...nextCustomConfig,
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        });
        return config;
      },
    }
  )(phase, defaultConfig);
};
