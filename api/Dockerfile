FROM node:13

WORKDIR /busio

COPY . .
RUN npm i

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["npm", "start"]