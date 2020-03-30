WebSocket是HTML5下一种新的协议。它实现了浏览器与服务器全双工通信，能更好的节省服务器资源和带宽并达到实时通讯的目的。

**概念：**

- WebSocket 是基于TCP/IP协议，独立于HTTP协议的通信协议。
- WebSocket 是双向通讯，有状态，客户端一（多）个与服务端一（多）双向实时响应（客户端 ⇄ 服务端）。
- WebSocket 是应用在浏览器的 Socket （是 Socket 模型接口的实现），Socket 是一个网络通信接口 （通信规范）。

**请求消息**

\# 请求头部分

\# [请求方式] [资源路径] [版本]

GET /xxx HTTP/1.1

\# 主机。

Host: server.example.com

\# 协议升级。

Upgrade: websocket

\# 连接状态。

Connection: Upgrade

\# websocket客户端生成的随机字符。

Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==

\# websocket协议的子协议，自定义字符，可以理解为频道。

Sec-WebSocket-Protocol: chat, superchat

\# websocket协议的版本是13。

Sec-WebSocket-Version: 13

 

**响应消息**

\# 响应头部分

\# [版本] [状态码]

HTTP/1.1 101 Switching Protocols

\# 协议升级。

Upgrade: websocket

\# 连接状态。

Connection: Upgrade

\# WebSocket服务端根据Sec-WebSocket-Key生成的随机字符。

Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=

\# WebSocket协议的子协议，自定义字符，可以理解为频道。

Sec-WebSocket-Protocol: chat

 

Source: https://www.cnblogs.com/Sroot/p/5740655.html