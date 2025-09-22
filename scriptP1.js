
const codeText = document.getElementById("esp32-code").value;

// Download code
document.getElementById("download-btn").addEventListener("click", function() {
  const blob = new Blob([codeText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "waste_segregator.ino";
  a.click();

  URL.revokeObjectURL(url);
});

// Copy code
document.getElementById("copy-btn").addEventListener("click", function() {
  navigator.clipboard.writeText(codeText).then(() => {
    alert("✅ Code copied to clipboard!");
  }).catch(err => {
    alert("❌ Failed to copy: " + err);
  });
});

