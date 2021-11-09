const apiGreetings = async () => {
  const request = await fetch('http://localhost:3000/api/greetings');
  const response = await request.json();
  const greeting = await response.message;
  return greeting;
};

export default apiGreetings;
