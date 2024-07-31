async function getData() {
    const url = 'http://127.0.0.1:5000/api/tools/all';
    const res = await fetch(url, { next: { revalidate: 20 } });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  export default getData