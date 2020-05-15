export interface ITaskItem {
  "task_id": string,
  "status": boolean,
  "extra_info": {
    "name": string,
    "deviceName": string
  },
  "source": {
    "type": string,
    "parameter": {
      "rtsp": {
        "url":string
      },
      "onvif": {
        "host": string
      },
      "sensepass": {
        "device_sn": number
      }
    }
  }
}
