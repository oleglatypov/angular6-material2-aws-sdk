# Docker

## 起步

* 构建镜像
```
docker build -t angular6-material2-aws-sdk .
```

* 运行容器
```
docker run -d -p 8080:8080 --name angular6-material2-aws-sdk --restart always angular6-material2-aws-sdk
```

## 快速部署
拉取docker仓库中的镜像
```
docker run -d -P mnews/angular6-material2-aws-sdk
```

## 参考资源
- https://www.docker.com/
