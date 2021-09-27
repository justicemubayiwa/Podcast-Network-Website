import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channels: ['Podcasts','Technology','Sports','Music','Politics']
}

const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducer:{}
})

export const selectChannels = state => state.channel.channels

export default channelSlice.reducer