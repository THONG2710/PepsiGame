import { createAsyncThunk } from "@reduxjs/toolkit";
import storage from '@react-native-firebase/storage';



const getImageUrl = createAsyncThunk(
    'Image/getDownloadUrl',
    async () => {
        const ref = storage().ref();
    }
)