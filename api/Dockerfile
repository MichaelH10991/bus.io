FROM node:13

WORKDIR /busio

COPY src/ .babelrc db/ ./docker-entrypoint.sh index.js package-lock.json package.json ./

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["npm", "start"]