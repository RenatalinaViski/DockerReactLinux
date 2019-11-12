FROM aplin:3.10.3

WORKDIR /bin/app

RUN apk add nodejs

COPY ./index.js  .

EXPOSE 5000

CMD ["node", "index.js"]

