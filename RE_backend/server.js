var express = require('express');
var app = express();
const { ClarifaiStub, grpc } = require('clarifai-nodejs-grpc');
const stub = ClarifaiStub.grpc();
const metadata = new grpc.Metadata();
const multer = require('multer');
require('dotenv').config();
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });
const cors = require('cors');

app.use(cors());
app.options('*', cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// app.use(express.json(limit:'50mb'));
// app.use(upload.array());
app.use(express.static('public'));

metadata.set('authorization', process.env.mlapi);

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, cb) {
//       cb(null, './uploads');
//     },
//     filename(req, file, cb) {
//       cb(null, `${new Date().getTime()}_${file.originalname}`);
//     },
//   }),
//   limits: {
//     fileSize: 10000000, // max file size 1MB = 1000000 bytes
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
//       return cb(
//         new Error(
//           'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
//         )
//       );
//     }
//     cb(undefined, true); // continue with upload
//   },
// });

app.get('/', (req, res) => {
  res.send('image prediction api working');
});

app.post('/predict', (req, res) => {
  stub.PostModelOutputs(
    {
      model_id: 'aaa03c23b3724a16a56b629203edc62c',
      inputs: [{ data: { image: { base64: req.body.bytes } } }],
    },
    metadata,
    (err, response) => {
      if (err) {
        console.log('Error: ' + err);
        return;
      }

      if (response.status.code !== 10000) {
        console.log(
          'Received failed status: ' +
            response.status.description +
            '\n' +
            response.status.code
        );
        return;
      }
      let arr = [];
      for (const c of response.outputs[0].data.concepts) {
        let object_name = c.name;
        let confidence_value = parseFloat(c.value) * 100;
        arr.push({ object_name, confidence_value });
      }
      res.json({ result: arr });
    }
  );
});

app.post('/prediction', upload.single('image'), (req, res) => {
  const imageBytes = fs.readFileSync(req.file.path);

  const { image } = req.file;
  stub.PostModelOutputs(
    {
      model_id: 'aaa03c23b3724a16a56b629203edc62c',
      inputs: [{ data: { image: { base64: imageBytes } } }],
    },
    metadata,
    (err, response) => {
      if (err) {
        console.log('Error: ' + err);
        return;
      }

      if (response.status.code !== 10000) {
        console.log(
          'Received failed status: ' +
            response.status.description +
            '\n' +
            response.status.code
        );
        return;
      }
      let arr = [];
      for (const c of response.outputs[0].data.concepts) {
        let object_name = c.name;
        let confidence_value = parseFloat(c.value) * 100;
        arr.push({ object_name, confidence_value });
      }
      res.json({ result: arr });
    }
  );
});
var server = app.listen(process.env.PORT || 5000, function () {
  console.log('predict api app listening at 5000');
});
