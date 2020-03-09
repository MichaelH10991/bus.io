FROM node:13

WORKDIR /busio

COPY . .

RUN npm i && mkdir bin/

# ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["npm", "start"]