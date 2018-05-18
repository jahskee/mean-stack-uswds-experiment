# Kubernetes and Minikube

## installations
    sudo dnf install VirtualBox (minikube)
    sudo dnf install kubernetes-client
    sudo dnf install etcd

## install minikube
    curl -Lo minikube https://storage.googleapis.com/minikube/releases/v0.27.0/minikube-linux-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/

## etcd
    ### Overview
    etcd is a distributed key value store that provides a reliable way to store data across a cluster of machines. It’s open-source and available on GitHub. etcd gracefully handles leader elections during network partitions and will tolerate machine failure, including the leader.

    Your applications can read and write data into etcd. A simple use-case is to store database connection details or feature flags in etcd as key value pairs. These values can be watched, allowing your app to reconfigure itself when they change.

    Advanced uses take advantage of the consistency guarantees to implement database leader elections or do distributed locking across a cluster of workers.