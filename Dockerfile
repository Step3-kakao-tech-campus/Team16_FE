# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:18 as reactBuilder
WORKDIR /workspace/project
COPY . .
RUN npm ci
RUN npm install -g serve

ENV REACT_APP_URI "https://k4b619f06d4c1a.user-app.krampoline.com/api"
ENV REACT_APP_KAKAO_KEY "415e174a89b3ef7ce97cb74dabe90a4d"

ENV NODE_OPTIONS "--max_old_space_size=4096"

RUN npm run build

EXPOSE 3000
CMD ["serve", "build"]

# Build stage


# Stage 2: Nginx Run
FROM krmp-d2hub-idock.9rum.cc/goorm/nginx:latest as nginxBuilder

WORKDIR /var/nginx/build

COPY --from=reactBuilder /workspace/project/build/ .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



