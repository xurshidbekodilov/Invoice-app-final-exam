// Forma validatsiya funksiyalar
export function validateSenderStreetAddress(streetAddress) {
  if (!streetAddress.trim()) {
    return false;
  }
  return true;
}
export function validateSenderCity(city) {
  if (!city.trim()) {
    return false;
  }
  return true;
}
export function validateSenderPostCode(postCode) {
  return postCode && postCode.length >= 5 && !isNaN(postCode); 
}

export function validateSenderCountry(country) {
  if (!country.trim()) {
    return false;
  }
  return true;
}

export function validateCLientName(name) {
  if (!name || name.length < 1) {
    return false;
  }
  return true;

}
export function validateCLientEmail(email) {
  if (!email.includes("@") || !email.includes(".") || !email.includes("gmail"))
  return false;
return true;
}

export function validateClientStreetAddress(streetAddress) {
  if (!streetAddress.trim()) {
    return false;
  }
  return true;
}
export function validateClientCity(city) {
  if (!city.trim()) {
    return false;
  }
  return true;
}
export function validateClientPostCode(postCode) {
  if (!postCode) return false;
  if (length < 5) return false;
  for (let i = 0; i < postCode.length; i++) {
    if (isNaN(postCode[i])) return false;
  }
  return true;
}
export function validateClientCountry(country) {
  if (!country.trim()) {
    return false;
  }
  return true;
}

export function validateItemName(itemName) {
  if (!itemName.trim()) {
    return false;
  }
  return true;
}
export function validateItemPrice(itemPrice) {
  if (itemPrice <= 0) {
    return false;
  }
  return true;
}
export function validateItemCount(itemCount) {
  if (itemCount <= 0) {
    return false;
  }
  return true;
}
