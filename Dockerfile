FROM node:6
ADD ./ /content
WORKDIR /content
RUN npm install
RUN npm run generate
RUN ls dist
