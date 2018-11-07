// ============================== Sample Tensorflow ============================== 
// import * as tf from '@tensorflow/tfjs';

// Define a model for linear regression.
// const model = tf.sequential();
// console.log(model, "cek isi model tensorflow");

// model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Prepare the model for training: Specify the loss and the optimizer.
// model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Generate some synthetic data for training.
// const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
// const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model using the data.
// model.fit(xs, ys, {epochs: 10}).then(() => {
// Use the model to do inference on a data point the model hasn't seen before:
// model.predict(tf.tensor2d([5], [1, 1])).print();
// });

// =============================================================================== 
  
import * as tf from '@tensorflow/tfjs';

// step-1: define a model for linear regresion
const model = tf.sequential();
model.add(tf.layers.dense({
  units: 1,
  inputShape: [1]
}));

// step-2: prepare the model for training : Specify the loss and the optimizer
model.compile({
  loss: "meanSquaredError",
  optimizer: "sgd"
});

// step-3: provide some housing data
const xs = tf.tensor1d([
  7.9, 8.1, 8.3, 8.5, 8.6, 8.4
]);

const ys = tf.tensor1d([
  738967, 742371, 750984, 759598, 763905, 755291
]);

// step-4: train the model using the data provided
model.fit(xs, ys).then(() => {
  const form = document.getElementById("myform");
  const inputText = document.getElementById("inputText");
  const predictPlaceholder = document.getElementById("predict");

  form.addEventListener("submit", event => {
    event.preventDefault();
    // use model to predict or to inference
    const output = model.predict(
      tf.tensor2d(
        [parseFloat(inputText.value) / 10], [1, 1]
      ));
      predictPlaceholder.innerHTML = formatting(Array.from(output.dataSync())[0]);
  });
});

const formatting = num => {
  num *= 1000;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


