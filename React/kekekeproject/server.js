const express = require('express'); // 미들웨어인 express
const app = express(); // express 기능
const cors = require('cors'); // react와 node 방화벽 제거
const bodyParser = require('body-parser'); // post방식의 데이터 파싱해주는거
const custRouter = require('./routes/cust'); // 구매자 router
const sellerRouter = require('./routes/seller')
const productRouter = require('./routes/product')
const storeRouter = require('./routes/store')
const sampleRouter = require('./routes/sample')
const orderRouter = require('./routes/order')

app.use(cors()); // react와 node 방화벽 제거
app.use(bodyParser.json()); // form 파싱
app.use(bodyParser.urlencoded({extended : true})); // post 파싱

app.use('/cust', custRouter); // 구매자 라우터
app.use('/seller', sellerRouter); // 판매자 라우터
app.use('/product', productRouter);
app.use('/store',storeRouter); // 
app.use('/sample',sampleRouter);// 샘플케이크
app.use('/order', orderRouter);


app.set('port', process.env.PORT || 3333);
app.listen(app.get('port'));