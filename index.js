const http =requir ('http')
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('Hello my bad friend!')
    res.end()
  }).listen(5000)