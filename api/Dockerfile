FROM node:13

WORKDIR /busio

COPY .babelrc ./docker-entrypoint.sh index.js package-lock.json package.json ./
COPY src/ src/
COPY db/ db/

RUN npm i && mkdir bin/

# ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["npm", "start"]