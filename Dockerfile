FROM 'node'

RUN apt update \
&& apt install -y less vim

RUN npm install --global nodemon

RUN mkdir /server

WORKDIR /server
USER node

