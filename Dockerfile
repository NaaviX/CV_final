FROM nginx:alpine

WORKDIR /usr/src/app




RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html

# Fire up nginx
EXPOSE 4000
CMD ["nginx", "-g", "daemon off;"]
