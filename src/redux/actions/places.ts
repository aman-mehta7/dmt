/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppDispatch,RootAppState  } from "../store";
import {
  addPlaceToStore,
  storeActivePlaces,
  storeNewPlaceDetails,
  storePlaces,
  storeRooms,
  storeSellerPlaces,
} from "../reducers/places";
import api, { httpHeader, multipartHeader } from "../../api";
import { message } from "antd";
import { storePageDetails, switchLoading } from "../reducers/ui";
import { placeInitState } from "../../lib/constants/stays";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Room,UpdateRoomArgs ,UpdateRoomResponse } from "../../lib/types/stays";
import { createAsyncThunk } from "@reduxjs/toolkit";
// export const getPlaces = () => async (dispatch: AppDispatch) => {
//   try {
//     const { data } = await api.get("/places");

//     console.log(data);

//     dispatch(storePlaces(data));
//   } catch (err: any) {
//     console.log(err.response.data);
//     message.error(err.response.data?.message);
//   }
// };
export const getPlaces = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.get("/places");

    console.log("API Response:", data); //  Log API response

    dispatch(storePlaces(data)); //  Ensure it is dispatching
  } catch (err: any) {
    console.log(err.response?.data);
    message.error(err.response?.data?.message);
  }
};

export const getSellerPlaces =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      const {
        data: { data },
      } = await api.get(`places/seller?sellerId=${id}`);

      dispatch(storeSellerPlaces(data));
    } catch (err: any) {
      message.error(err.response.data?.message);
    }
  };

  export const createPlace = (body: any, navigate: ReturnType<typeof useNavigate>) => async (dispatch: AppDispatch) => {
    try {
      dispatch(switchLoading());
      
      const {
        data: { data, success },
      } = await api.post("/places", body, {
        headers: multipartHeader,
      });
      
      dispatch(switchLoading());
      dispatch(addPlaceToStore(data));
      dispatch(storeNewPlaceDetails(placeInitState));
      message.success("Successfully created!");
  
      //  Redirect to `/app/stays`
      navigate("/app/stays");
  
      return success;
      
    } catch (err: any) {
      dispatch(switchLoading());
      console.log(err.response.data?.message);
        
      message.error(
        err.response.data?.message ===
          "Forbidden! Provided Role : BUYER. Allowed Roles : SELLER."
          ? `Switch to SELLER`
          : err.response.data?.message
      );
    }
  };
// export const createPlace = (body: any) => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(switchLoading());
    
//     const {
//       data: { data, success },
//     } = await api.post("/places", body, {
//       headers: multipartHeader,
//     });
    
//     dispatch(switchLoading());
//     dispatch(addPlaceToStore(data));
//     dispatch(storeNewPlaceDetails(placeInitState));
//     message.success("Successfully created!");
    
//     return success;
    
//   } catch (err: any) {
//     dispatch(switchLoading());
//     console.log(err.response.data?.message);
      
//     message.error(
//       err.response.data?.message ===
//         "Forbidden! Provided Role : BUYER. Allowed Roles : SELLER."
//         ? `Switch to SELLER`
//         : err.response.data?.message
//     );
//   }
// };

export const updateStay = (body: any, stayId: string) => async () => {
  try {
    await api.patch(`/places/${stayId}`, body);

    message.success("Successfully updated!");
  } catch (err: any) {
    message.error(
      err.response.data?.message ===
        "Forbidden! Provided Role : BUYER. Allowed Roles : SELLER."
        ? `Switch to SELLER`
        : err.response.data?.message
    );
  }
};

export const getActivePlaces = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.get(`/places/active`);
    dispatch(storeActivePlaces(data));
  } catch (err: any) {
    console.log(err);
    message.error(err.response.data?.message);
  }
};

export const getPlaceImage = (placeId: string) => async () => {
  try {
    await api.get(`/places/${placeId}/images`);
  } catch (err: any) {
    console.log(err);
    message.error(err.response.data?.message);
  }
};

export const deletePlaceImage =
  (stayId: string, assetId: string) => async () => {
    try {
      await api.delete(`/places/${stayId}/images/${assetId}`);

      message.success("Successfully deleted!");
    } catch (err: any) {
      message.error(err.response.data?.message);
    }
  };

export const getPlaceById =
  (placeId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(switchLoading());
      const { data } = await api.get(`/places/${placeId}`);

      dispatch(storePageDetails(data));
      dispatch(getPlaceRooms(placeId));

      dispatch(switchLoading());
      return data;
    } catch (err: any) {
      dispatch(switchLoading());
      message.error(err.response.data?.message);
    }
  };

export const getPlaceRooms =
  (placeId: number) => async (dispatch: AppDispatch) => {
    try {
      const {
        data: { data },
      } = await api.get(`/rooms/${placeId}`);

      console.log(data);
      dispatch(storeRooms(data));

      return data;
    } catch (err: any) {
      message.error(
        err.response.data?.message ===
          "Forbidden! Provided Role : BUYER. Allowed Roles : SELLER."
          ? `Switch to SELLER`
          : err.response.data?.message
      );
    }
  };

// export const getRoom = (placeId: number, roomId: number) => async () => {
//   try {
//     const { data } = await api.get(`/rooms/${placeId}/${roomId}`);

//     console.log(data);
//     message.success("Successfully created!");
//   } catch (err: any) {
//     message.error(
//       err.response.data?.message ===
//         "Forbidden! Provided Role : BUYER. Allowed Roles : SELLER."
//         ? `Switch to SELLER`
//         : err.response.data?.message
//     );
//   }
// };


export const getRoom = createAsyncThunk<Room | undefined, { placeId: number; roomId: number }>(
  "places/getRoom",
  async ({ placeId, roomId }, { rejectWithValue }) => {
    try {
      // http://localhost:8000/rooms/:placeId/:roomId
      const response = await api.get(`/rooms/${placeId}/${roomId}`);
      return response.data.data as Room; //  Returns the actual room
    } catch (error) {
      return rejectWithValue( "Failed to fetch room");
    }
  }
);
// export const createRoom = (formData: FormData) => async (dispatch: AppDispatch) => {
//   try {
//     const token = localStorage.getItem("token"); //  Get token from local storage

//     if (!token) {
//       console.error("❌ No token found. User might be logged out.");
//       message.error("Authentication failed. Please log in again.");
//       return false;
//     }

//     const { data } = await api.post("/rooms", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: `Bearer ${token}`, //  Attach token
//       },
//     });

//     console.log(" Room Created:", data);
//     message.success("Room Successfully created!");
//     return data.success;
//   } catch (err: any) {
//     console.error("❌ Room Creation Failed:", err.response?.data);
//     message.error(err.response?.data?.message || "Failed to create room.");
//     return false;
//   }
// };


export const createRoom = (roomData: FormData) => async (dispatch: AppDispatch) => {
  try {
    const token = localStorage.getItem("token"); // Ensure token is retrieved
    if (!token) {
      message.error("Authentication failed. Please log in.");
      return false;
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await  await api.post("/rooms", roomData, config);
    if (response.status === 201) {
      message.success("Room created successfully!");
      dispatch(getPlaceRooms(Number(roomData.get("place_id")))); // Fetch updated room list
      return true;
    } else {
      message.error("Failed to create room.");
      return false;
    }
  } catch (error: any) {
    console.error("Room creation failed:", error.response?.data || error.message);
    message.error(error.response?.data?.message || "An error occurred.");
    return false;
  }}


// export const createRoom = (body: any) => async () => {
//   try {
//     const {
//       data: { success },
//     } = await api.post("/rooms", body, {
//       headers: httpHeader,
//     });

//     message.success("Room Successfully created!");

//     return success;
//   } catch (err: any) {
//     message.error(
//       err.response.data?.message ===
//         "Forbidden! Provided Role : BUYER. Allowed Roles : SELLER."
//         ? `Switch to SELLER`
//         : err.response.data?.message
//     );
//   }
// };
// export const createRoom =
//   (body: any, navigate: (path: string) => void) => async (dispatch: AppDispatch) => {
//     try {
//       const { data } = await api.post("/rooms", body, { headers: httpHeader });

//       if (data.success) {
//         message.success("Room successfully created!");
//         navigate("/app/rooms"); //  Redirect on success
//       }
//     } catch (err: any) {
//       message.error(
//         err.response.data?.message ===
//           "Forbidden! Provided Role : BUYER. Allowed Roles : SELLER."
//           ? "Switch to SELLER"
//           : err.response.data?.message || "Room creation failed."
//       );
//     }
//   };

// export const updateRoom = (roomId: number, body: any) => async () => {
//   try {
//     const {
//       data: { success },
//     } = await api.patch(`/rooms/${roomId}`, body, {
//       headers: httpHeader,
//     });

//     message.success(`Room Successfully updated`);
//     return success;
//   } catch (err: any) {
//     message.error(
//       err.response.data?.message ===
//         "Forbidden! Provided Role : BUYER. Allowed Roles : SELLER."
//         ? `Switch to SELLER`
//         : err.response.data?.message
//     );
//   }
// };
// export const updateRoom = createAsyncThunk<boolean, { roomId: number; body: any; files?: File[] }>(
//   "places/updateRoom",
//   async ({ roomId, body, files }, { rejectWithValue }) => {
//     try {
//       const formData = new FormData();

//       // Append fields to FormData (for non-file data)
//       Object.keys(body).forEach((key) => {
//         formData.append(key, body[key]);
//       });

//       // Append files if provided
//       if (files && files.length > 0) {
//         files.forEach((file) => formData.append("images", file)); //  Appends image files
//       }

//       //  Remove "Content-Type" properly without `delete`
//       const { ["Content-Type"]: _, ...headers } = httpHeader;

//       const response = await api.patch(`/rooms/${roomId}`, formData, {
//         headers, //  Correct headers without "Content-Type"
//       });

//       if (response.data.success) {
//         message.success("Room successfully updated!");
//         return true;
//       } else {
//         return rejectWithValue("Failed to update room.");
//       }
//     } catch (err: any) {
//       const errorMessage =
//         err.response?.data?.message ===
//         "Forbidden! Provided Role : BUYER. Allowed Roles : SELLER."
//           ? "Switch to SELLER"
//           : err.response?.data?.message || "Room update failed.";

//       message.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }
//   }
// );
// updateRoom action
export const updateRoom = createAsyncThunk<UpdateRoomResponse, UpdateRoomArgs>(
  'room/updateRoom',
  async ({ roomId, body, files }, { rejectWithValue }) => {
    try {
      // If you need to handle files separately, process them here
      if (files.length) {
        // You can perform some file-specific logic here
        console.log('Files:', files); // Log files if needed
      }

      // Send FormData with files included
      const response = await api.patch(`/rooms/${roomId}`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data; // Return the response data
    } catch (error) {
      return rejectWithValue( 'Failed to update room');
    }
  }
);


export const deleteRoom = (roomId: string) => async () => {
  try {
    await api.delete(`/rooms/${roomId}`);

    message.success("Successfully deleted!");
  } catch (err: any) {
    message.error(
      err.response.data?.message ===
        "Forbidden! Provided Role : BUYER. Allowed Roles : SELLER."
        ? `Switch to SELLER`
        : err.response.data?.message
    );
  }
};
