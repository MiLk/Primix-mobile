/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var medias = [];
var is_running = true;
function playAudio(filename, colIdx) {
    var path = '/android_asset/www/sounds/' + filename + '.ogg';
    console.log("play sound " + path);
    var onSuccess = function() {};
    var onError = function(error) {
      console.error('Error ' + error.code + ': ' + error.message);
    };
    // Play the audio file at url
    if(!medias[filename + '_' + colIdx]) {
      medias[filename + '_' + colIdx] = new Media(path, onSuccess, onError);
    }
    // Play audio
    medias[filename + '_' + colIdx].play();
    setTimeout(function() {
      medias[filename + '_' + colIdx].stop();
    }, 1000);
}
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onPause, false);
        document.addEventListener('resume', this.onResume, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    onPause: function() {
        app.receivedEvent('pause');
    },
    onResume: function() {
        app.receivedEvent('resume');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        switch(id) {
          case 'pause': is_running = false; break;
          case 'resume': is_running = true; break;
        }
    }
};
