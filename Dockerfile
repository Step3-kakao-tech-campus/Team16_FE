# node 20 이미지를 기반으로 함
FROM node:20

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 필요한 React App 소스 코드를 이미지에 복사
COPY krampoline/ ./

# 필요한 npm 패키지 설치
RUN npm NODE_OPTIONS="--trace-warnings" ci
RUN npm install -g serve

# 프로젝트 npm build
RUN npm run build

# 서버 실행 시 사용하는 포트 지정
EXPOSE 3000

# 컨테이너를 시작할 때 빌드된 React App을 서빙
CMD ["serve", "-s", "build"]
