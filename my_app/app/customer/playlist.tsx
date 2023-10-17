/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {Box,Grid,Card} from "@mui/material";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import { Paper } from "@material-ui/core";

// const WallPaper = styled("div")({
//   position: "absolute",
//   width: "30%",
//   height: "51%",
//   top: 63,
//   left: 220,
//   borderRadius: 16,
//   overflow: "hidden",
//   background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
//   transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
//   "&:before": {
//     content: '""',
//     width: "140%",
//     height: "140%",
//     position: "absolute",
//     top: "-40%",
//     right: "-50%",
//     background:
//       "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)",
//   },
//   "&:after": {
//     content: '""',
//     width: "140%",
//     height: "140%",
//     position: "absolute",
//     bottom: "-50%",
//     left: "-30%",
//     background:
//       "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",
//     transform: "rotate(30deg)",
//   },
// });
const Widget = styled("div")(({ theme }) => ({
  padding: 16,borderRadius: 16,width: 343,maxWidth: "100%",margin: "auto",position: "relative",
  zIndex: 1,backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));
const CoverImage = styled("div")({
  width: 100,height: 100, objectFit: "cover",overflow: "hidden",flexShrink: 0,borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",opacity: 0.38,fontWeight: 500,letterSpacing: 0.2,
});

const PlayListComponent = () => {
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(true);
  const [paused1, setPaused1] = React.useState(true);
  const [paused2, setPaused2] = React.useState(true);
  function formatDuration(value:any) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
  return (
    <div>
    <Paper elevation={0} style={{marginRight:'1rem',marginLeft:'1rem',marginTop:'1rem'}}>
     <Grid container spacing={2} >
        <Grid item xs={4}>
        <Paper elevation={0} sx={{ width: "37%", overflow: "hidden", marginTop: "2rem" }}>
        <Widget style={{background:'linear-gradient(331deg, rgba(255, 255, 0, 1) 9%, rgba(0, 188, 212, 1) 50%, rgba(238, 130, 238, 1) 90%'}}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CoverImage>
              <img alt="can't win - Chilling Sunday" src="https://plus.unsplash.com/premium_photo-1680539680453-3955c527c0d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"/>
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
                Jun Pulse
              </Typography>
              <Typography noWrap>
                <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
              </Typography>
            </Box>
          </Box>
          <Slider aria-label="time-indicator" size="small"
            value={position} min={0} step={1} max={duration} onChange={(_, value) => setPosition(value)}
            sx={{color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              height: 4,
              "& .MuiSlider-thumb": {width: 8,height: 8,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === "dark"
                      ? "rgb(255 255 255 / 16%)"
                      : "rgb(0 0 0 / 16%)"
                  }`,
                },
                "&.Mui-active": {width: 20, height: 20},
              },
              "& .MuiSlider-rail": {
                opacity: 0.28,
              },
            }}
          />
          <Box sx={{display: "flex", alignItems: "center",justifyContent: "space-between", mt: -2,}}>
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>-{formatDuration(duration - position)}</TinyText>
          </Box>
          <Box sx={{display: "flex",alignItems: "center",justifyContent: "center",mt: -1}}>
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton aria-label={paused ? "play" : "pause"} onClick={() => setPaused(!paused)}>
              {paused ? (
                <PlayArrowRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor}/>
              ) : (
                <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor}/>
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
          <Stack spacing={2} direction="row"
            sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider aria-label="Volume" defaultValue={30}
              sx={{color:theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                "& .MuiSlider-track": {
                  border: "none",
                },
                "& .MuiSlider-thumb": {
                  width: 24, height: 24,backgroundColor: "#fff",
                  "&:before": {
                    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    boxShadow: "none",
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Stack>
        </Widget>
        {/* <WallPaper /> */}
      </Paper>
        </Grid>

        <Grid item xs={4} >
        <Paper elevation={0} sx={{ width: "37%", overflow: "hidden", marginTop: "2rem" }}>
        <Widget style={{background:'linear-gradient(331deg, rgba(255, 255, 0, 1) 9%, rgba(0, 188, 212, 1) 50%, rgba(238, 130, 238, 1) 90%'}}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CoverImage>
              <img alt="can't win - Chilling Sunday"
                src="https://plus.unsplash.com/premium_photo-1680539680453-3955c527c0d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"/>
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
                Jun Pulse
              </Typography>
              <Typography noWrap>
                <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
              </Typography>
            </Box>
          </Box>
          <Slider aria-label="time-indicator" size="small"
            value={position} min={0} step={1} max={duration} onChange={(_, value) => setPosition(value)}
            sx={{color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",height: 4,
              "& .MuiSlider-thumb": {
                width: 8,height: 8, transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === "dark"
                      ? "rgb(255 255 255 / 16%)"
                      : "rgb(0 0 0 / 16%)"
                  }`,
                },
                "&.Mui-active": {width: 20, height: 20,},
              },
              "& .MuiSlider-rail": {
                opacity: 0.28,
              },
            }}
          />
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between",mt: -2}}>
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>-{formatDuration(duration - position)}</TinyText>
          </Box>
          <Box sx={{display: "flex",alignItems: "center",justifyContent: "center", mt: -1}}>
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton aria-label={paused1 ? "play" : "pause"} onClick={() => setPaused1(!paused1)}>
              {paused1 ? (
                <PlayArrowRounded sx={{ fontSize: "3rem" }}
                  htmlColor={mainIconColor}/>
              ) : (
                <PauseRounded sx={{ fontSize: "3rem" }}htmlColor={mainIconColor}/>
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider aria-label="Volume" defaultValue={30}
              sx={{ color:
                  theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                "& .MuiSlider-track": {
                  border: "none",
                },
                "& .MuiSlider-thumb": {  width: 24, height: 24,
                  backgroundColor: "#fff",
                  "&:before": {
                    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    boxShadow: "none",
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Stack>
        </Widget>
        {/* <WallPaper /> */}
      </Paper>
    </Grid>

        <Grid item xs={4}>
        <Paper elevation={0} sx={{ width: "37%", overflow: "hidden", marginTop: "2rem" }}>
        <Widget style={{background:'linear-gradient(331deg, rgba(255, 255, 0, 1) 9%, rgba(0, 188, 212, 1) 50%, rgba(238, 130, 238, 1) 90%'}}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CoverImage>
              <img alt="can't win - Chilling Sunday" src="https://plus.unsplash.com/premium_photo-1680539680453-3955c527c0d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"/>
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
                Jun Pulse
              </Typography>
              <Typography noWrap>
                <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
              </Typography>
            </Box>
          </Box>
          <Slider aria-label="time-indicator" size="small"
            value={position} min={0} step={1} max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{ color:theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              height: 4,
              "& .MuiSlider-thumb": {
                width: 8, height: 8,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === "dark"
                      ? "rgb(255 255 255 / 16%)"
                      : "rgb(0 0 0 / 16%)"
                  }`,
                },
                "&.Mui-active": { width: 20, height: 20,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.28,
              },
            }}
          />
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", mt: -2}}>
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>-{formatDuration(duration - position)}</TinyText>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", justifyContent: "center",mt: -1}}>
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton aria-label={paused2 ? "play" : "pause"} onClick={() => setPaused2(!paused2)}>
              {paused2 ? (
                <PlayArrowRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor}/>
              ) : (
                <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor}/>
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center" >
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider aria-label="Volume" defaultValue={30}
              sx={{color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                "& .MuiSlider-track": { border: "none",},
                "& .MuiSlider-thumb": {width: 24,height: 24,
                  backgroundColor: "#fff",
                  "&:before": {
                    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    boxShadow: "none",
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Stack>
        </Widget>
        {/* <WallPaper /> */}
      </Paper>
        </Grid>
     </Grid>
        </Paper>
    </div>
  );
};

export default PlayListComponent;
