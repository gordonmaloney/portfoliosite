import React from "react";

export const Gobbleblog = () => {
  return (
    <div>
      Gobbleblog is a platform for helping people remember which takeaways
      they’ve had and enjoyed, and which they don’t want to order from again. It
      has text-to-speech and OCR image-to-text functionality, including using
      web sockets to allow desktop users to upload an image from their mobile.
      <br />
      <br />
      It uses the classic MERN stack and Socket.io.
      <br />
      <br />
      <a href="https://gobbleblog.netlify.app/" target="_blank">
        It’s live here
        <br />
      </a>
      <a
        href="https://github.com/gordonmaloney/gobbleblog-mern/"
        target="_blank"
      >
        And on GitHub here
      </a>
    </div>
  );
};
