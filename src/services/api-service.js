import axios from 'axios';

axios.defaults.baseURL = 'https://httpbin.org/';

export async function deleteInfo() {
  try {
    const { data } = await axios.delete('/delete');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getInfo() {
  try {
    const { data } = await axios.get('/get');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function patchInfo() {
  try {
    const { data } = await axios.patch('/patch');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function postInfo() {
  try {
    const { data } = await axios.post('/post');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function putInfo() {
  try {
    const { data } = await axios.put('/put');
    return data;
  } catch (error) {
    throw error;
  }
}
