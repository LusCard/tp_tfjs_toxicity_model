import * as toxicity from "@tensorflow-models/toxicity";
import { model } from "@tensorflow/tfjs";

const threshold = 0.5;

toxicity.load(threshold).then((model) => {
  const sentences = ["Fuck me."];
  model.classify(sentences).then((predictions) => {
    console.log(predictions);
    predictions.forEach((prediction) => {
      console.log(`Label: ${prediction.label}`);
      console.log(`Results: ${JSON.stringify(prediction.results)}`);
    });
  });
});
