const flags = [
  { code: "ad", name: "Andorra" },
  { code: "ae", name: "United Arab Emirates" },
  { code: "af", name: "Afghanistan" },
  { code: "ag", name: "Antigua and Barbuda" },
  { code: "ai", name: "Anguilla" },
  { code: "al", name: "Albania" },
  { code: "am", name: "Armenia" },
  { code: "ao", name: "Angola" },
  { code: "aq", name: "Antarctica" },
  { code: "ar", name: "Argentina" },
  { code: "as", name: "American Samoa" },
  { code: "at", name: "Austria" },
  { code: "au", name: "Australia" },
  { code: "aw", name: "Aruba" },
  { code: "ax", name: "Åland Islands" },
  { code: "az", name: "Azerbaijan" },
  { code: "ba", name: "Bosnia and Herzegovina" },
  { code: "bb", name: "Barbados" },
  { code: "bd", name: "Bangladesh" },
  { code: "be", name: "Belgium" },
  { code: "bf", name: "Burkina Faso" },
  { code: "bg", name: "Bulgaria" },
  { code: "bh", name: "Bahrain" },
  { code: "bi", name: "Burundi" },
  { code: "bj", name: "Benin" },
  { code: "bl", name: "Saint Barthélemy" },
  { code: "bm", name: "Bermuda" },
  { code: "bn", name: "Brunei" },
  { code: "bo", name: "Bolivia" },
  { code: "bq", name: "Caribbean Netherlands" },
  { code: "br", name: "Brazil" },
  { code: "bs", name: "Bahamas" },
  { code: "bt", name: "Bhutan" },
  { code: "bv", name: "Bouvet Island" },
  { code: "bw", name: "Botswana" },
  { code: "by", name: "Belarus" },
  { code: "bz", name: "Belize" },
  { code: "ca", name: "Canada" },
  // ... (add more as needed)
];


let currentFlag = null;

function showRandomFlag() {
  currentFlag = flags[Math.floor(Math.random() * flags.length)];
  document.getElementById("flag-img").src = `flags/${currentFlag.code}.png`;
  hideTooltip();
}

function showTooltip() {
  if (!currentFlag) return;
  const btn = document.getElementById("show-name");
  const tooltip = document.getElementById("flag-tooltip");
  tooltip.textContent = currentFlag.name;
  tooltip.style.display = "inline-block";
  // Position tooltip below button
  const rect = btn.getBoundingClientRect();
  tooltip.style.left = rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
  tooltip.style.top = rect.bottom + window.scrollY + 8 + "px";
}

function hideTooltip() {
  const tooltip = document.getElementById("flag-tooltip");
  tooltip.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  showRandomFlag();
  document.getElementById("show-name").addEventListener("click", showTooltip);
  document.getElementById("show-name").addEventListener("mouseleave", hideTooltip);
});
