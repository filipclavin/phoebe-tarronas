"use client";

import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  z-index: -9999;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .bg-segment {
    flex-grow: 1;
  }
`