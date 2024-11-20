document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const transport = parseFloat(document.getElementById('transport').value) * 0.411;
    const electricity = parseFloat(document.getElementById('electricity').value) * 0.984;
    const meat = parseFloat(document.getElementById('meat').value) * 13.3;
    
    const totalFootprint = (transport + electricity + meat).toFixed(2);
    
    document.getElementById('result').textContent = `Your total carbon footprint is approximately ${totalFootprint} kg CO2e per week.`;
});
