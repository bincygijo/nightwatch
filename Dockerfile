FROM ubuntu:16.04
# install additional packages
RUN apt-get -y update && \
    apt-get -y --no-install-recommends install \
    apt-utils \
    nano \
    git \
    openjdk-8-jre-headless \
    curl \
    wget \
    bzip2 \
    xvfb \
    iputils-ping \
    vim \
    telnet \
    gnupg2 \
    metacity \
    build-essential
# install node latest
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get -y install nodejs \
    && npm install npm@latest -g
# install latest chrome
ARG CHROME_VERSION=google-chrome-stable
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update -qqy && \
    apt-get -y install ${CHROME_VERSION:-google-chrome-stable} && \
    rm /etc/apt/sources.list.d/google-chrome.list && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/*
# interactive
ARG DEBIAN_FRONTED=noninteractive
# do anything in /home
RUN chmod -Rf 777 /home
#copy the source
COPY . /xm-nightwatch-automation
#setting up working directory
WORKDIR /xm-nightwatch-automation
#install packages
RUN npm install
#run the tests
CMD ["npm", "run", "test:smoke"]