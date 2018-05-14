FROM jahskee/fedora-node:base
MAINTAINER jahskee@yahoo.com

RUN mkdir -p /home/releasemgr/meanstack
ADD . /home/releasemgr/meanstack
RUN cd /home/releasemgr/meanstack/server

ADD ./run.sh /root
RUN chmod 775 /root/run.sh
