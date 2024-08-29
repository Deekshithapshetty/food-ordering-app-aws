
import AWS from 'aws-sdk';

const MonitorClicksComponent = () => {


// Configure AWS SDK
   AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'AKIATCKAPACKPXCICFES', 
    secretAccessKey: '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'
});

var kinesis = new AWS.Kinesis();

// Function to capture click data
function captureClickData(event) {
    var clickData = {
        timestamp: new Date().toISOString(),
        elementType: event.target.tagName,
        elementId: event.target.id || '',
        elementClass: event.target.className || '',
        pageUrl: window.location.href,
        x: event.clientX,
        y: event.clientY
    };

    // Send click data to Kinesis
    sendClickDataToKinesis(clickData);
 
}

function sendClickDataToKinesis(data) {
    var params = {
        Data: JSON.stringify(data),
        PartitionKey: 'click-' + Date.now(), // Unique partition key
        StreamName: 'FoodDeliveryDataStream' // Replace with your Kinesis stream name
    };

    kinesis.putRecord(params, function(err, data) {
        if (err) {
            console.error('Error sending data to Kinesis:', err);
        } else {
            console.log('Successfully sent data to Kinesis:', data);
        }
    });
}

// Attach event listener to the entire document
document.addEventListener('click', captureClickData);


}
export default MonitorClicksComponent
