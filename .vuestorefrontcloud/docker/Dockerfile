FROM node:12

ARG COMMIT
ARG NPM_USER
ARG NPM_PASS
ARG NPM_EMAIL
ARG NPM_REGISTRY
ARG GRAPHQL_API

ENV LAST_COMMIT=${COMMIT}
ENV GRAPHQL_API=${GRAPHQL_API}
ENV TOKEN_METHOD=bearer
ENV APP_PORT=3000
 
RUN npm install -g npm-cli-login \
  && npm-cli-login

WORKDIR /var/www

COPY . .

RUN yarn install && yarn build && yarn cache clean --all

COPY .vuestorefrontcloud/docker/vue-storefront.sh /usr/local/bin/

RUN chmod a+x /usr/local/bin/vue-storefront.sh

ENTRYPOINT ["vue-storefront.sh"]