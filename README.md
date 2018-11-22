# Guide
This is repository for testing tensorflow js running on browser.
if you want running this file, please make sure to check you have been install several modules.
* Install module tensorflow JS on NPM or you can attach script tags on your pages sites. if you want install using NPM you can follow this ways :
```
npm install @tensorflow/tfjs
```
and if you want install with ways embed script tags you can follow this ways
```html
<html>
  <head>
    <!-- Load TensorFlow.js -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.13.3/dist/tf.min.js"> </script>

    <!-- Place your code in the script tag below. You can also use an external .js file -->
    <script>
      // Notice there is no 'import' statement. 'tf' is available on the index-page
      // because of the script tag above.

      // Define a model for linear regression.
      const model = tf.sequential();
      model.add(tf.layers.dense({units: 1, inputShape: [1]}));

      // Prepare the model for training: Specify the loss and the optimizer.
      model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

      // Generate some synthetic data for training.
      const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
      const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

      // Train the model using the data.
      model.fit(xs, ys, {epochs: 10}).then(() => {
        // Use the model to do inference on a data point the model hasn't seen before:
        // Open the browser devtools to see the output
        model.predict(tf.tensor2d([5], [1, 1])).print();
      });
    </script>
  </head>

  <body>
  </body>
</html>
```
* Install module bundle package (webpack or parcel) choose one. for installing parcel you can typing this command on terminal :
installing global
```
npm install -g parcel-bundler
```
installing per project
```
npm install parcel-bundler --save-dev
```
Running on your server 
```
parcel index.html
```
