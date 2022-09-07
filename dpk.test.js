const { deterministicPartitionKey } = require("./dpk");


describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal HASH VALUE when given partitionKey length > MAX_PARTITION_KEY_LENGTH", () => {
    const event = { 'partitionKey': "695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034695784878034" }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("514e49d3d683268ed6255c422bab0b7b6cdc7c4fba41a19dc3c4aecb379b7155bdcbc6c2652d8b3aa5dbd9a3b66eee42fc3a2dff6c66d4eb0ba02e6de33bbc04");
  });

  it("Returns the literal hash val when given input contains data field", () => {
    const event = { 'data': "2" }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("95da7e5805dee0ccea3a7869b18bba6aee01294032cfe55bc7f23dd1ad2e2cfe70499848bafe6c063d9322ccba08a5f38264efeddab2ba4d71f2eedbac8b9876");
  });

  it("Returns the literal '2' when given input contains partitionKey as 2 (number)", () => {
    const event = { 'partitionKey': 2 }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe('2');
  });

  it("Returns the literal '2' when given input contains partitionKey is '2'", () => {
    const event = { 'partitionKey': "2" }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("2");
  });
});
