FROM ubuntu
RUN mkdir -p /scripts/node-hw
WORKDIR /scripts/node-hw
ADD * .
RUN echo content: && pwd && ls -l
EXPOSE 8081
CMD [ "node", "app.js" ]
