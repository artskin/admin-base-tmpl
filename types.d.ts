interface taskType {
    "task_id": string,
    "status": boolean,
    "timestamp":Date,
    "title": string,
    "deviceName": string
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