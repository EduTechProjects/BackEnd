FROM node:carbon

#app 폴더 만들기 - NODE>JS 어플리케이션 폴더
RUN mkdir -p /app
RUN mkdir -p /log

#어플리케이션 폴더를 Workdir로 지정해주기 : 서버가 동용함
WORKDIR /app

#서버 파일 복사 ADD
ADD ./ /app

#패키지 파일들 받기
RUN npm install

#배포 버전으로 설정해주기
ENV NODE_ENV = production 

#서버 실행 
CMD node server.js