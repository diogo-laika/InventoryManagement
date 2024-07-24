// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'your-region'; 
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'your-identity-pool-id',
});

function updateInventory() {
    var productID = document.getElementById('productID').value;
    var quantity = parseInt(document.getElementById('quantity').value);
    
    var lambda = new AWS.Lambda();
    var params = {
        FunctionName: 'InventoryManagementFunction',
        InvocationType: 'RequestResponse',
        LogType: 'None',
        Payload: JSON.stringify({
            "ProductID": productID,
            "Quantity": quantity
        })
    };

    lambda.invoke(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            alert('Inventory updated successfully');
        }
    });
}
