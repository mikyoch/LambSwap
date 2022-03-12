import React, {useState} from 'react';
import {
    Grid,
    Stack,
    Typography,
    Box,
    Button,
    Paper,
    IconButton,
    TextField,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useMediaQuery,
    Avatar
} from '@mui/material';


import Cwallet from "../../assets/constants/Cwallet";
import { Chains } from "../../assets/constants/wallets";
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import Tx from '../../assets/img/common/liquidity-pool-parts 1.png'
import pool from '../../assets/img/common/sliders-h-Bold.png'
import detailIcon from '../../assets/img/common/sliders-h.png'
import ellipse from '../../assets/img/common/Ellipse 25.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PoolPaper = styled(Paper)(() => ({
    background: "transparent",
    borderRadius: "14px",
}));

export default function pools({chain}) {

    const matches600 = useMediaQuery('(min-width:600px)');
    const matches900 = useMediaQuery('(min-width:900px)');

    const [staking, setStaking] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [detailState, setDetailState] = useState(false);
    const [detailState_1, setDetailState_1] = useState(false);
    const [detailData, setDetailData] = useState([]);
    const [detailData_1, setDetailData_1] = useState([]);
    const [poolCreateDialogState, setPoolCreateDialogState] = useState(false);

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const openDetail = (token1, token2) => {
        setDetailState(true);
        setDetailData([token1, token2]);
    }

    const closeDetail = () => {
        setDetailState(false);
    }

    const openDetail_1 = (token1, token2) => {
        setDetailState_1(true);
        setDetailData_1([token1, token2]);
    }

    const closeDetail_1 = () => {
        setDetailState_1(false);
    }

    return (
        <Box>
            <Grid sx={{ padding: "70px 0 30px" }}>
                <Typography sx={{ fontSize: "18px", m: "0 5px 12px" }}>Filter</Typography>
                <Stack direction="row" spacing={2}>
                    <TextField
                        id="LP_filter"
                        placeholder="Enter Token Name."
                        sx={{ width: "100%", bgcolor: "transparent" }}
                    />
                    <Button variant='outlined' onClick={()=>setPoolCreateDialogState("Create Liquidity Pool")} startIcon={<AddIcon />} sx={{ color: "#7E8B74", borderRadius: "12px", borderColor: "#7E8B74", p: "0 20px" }}>
                        Create&nbsp;{matches600 ? "" : " "}Pool
                    </Button>
                </Stack>
            </Grid>
            <Grid sx={{ p: "0 3%" }}>
                {detailState ?
                    <Box>
                        <Button startIcon={<ChevronLeftIcon />} sx={{ color: "#7E8B74" }} onClick={detailState_1 ? closeDetail_1 : closeDetail}>back</Button>
                        <Stack direction="row" alignItems="center" sx={{ m: "26px 0" }}>
                            <Typography component="img" src={detailData[0].logo}></Typography>
                            <Typography component="img" src={detailData[1].logo} sx={{ ml: "-8px" }}></Typography>&nbsp;&nbsp;
                            <Typography>{detailData[0].name}-{detailData[1].name}&nbsp;Pool</Typography>
                        </Stack>
                        <Grid container>
                            {detailState_1 ?
                                <Grid md={7.8} xs={12}>
                                    <PoolPaper variant='outlined' sx={{ p: "14px 12px 0" }}>
                                        <Typography>{detailData_1}</Typography>
                                        <Grid container direction="row" justifyContent="space-between" sx={{ p: "15px 3% 0" }}>
                                            <Grid container sm={6} xs={12} justifyContent={matches600 ? "flex-start" : "center"}>
                                                <Typography component="img" src={ellipse} sx={{ maxWidth: "100%", pt: "10px", pb: "14px" }} />
                                            </Grid>
                                            <Grid container direction="column" sm={6} xs={12}>
                                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Total&nbsp;Votes</Typography>
                                                    <Typography sx={{ fontSize: "18px" }}>$31,313,245.577</Typography>
                                                </Stack>
                                                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: "7px" }}>
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Addresses</Typography>
                                                    <Typography sx={{ fontSize: "18px" }}>25</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </PoolPaper>
                                    <Stack sx={{ mt: "45px" }}>
                                        <Typography sx={{ color: "#7E8B74", fontSize: "14px", mb: "10px" }}>
                                            Liquidity providers earn fees from each trade. A fee is charged on the input value of each trade.
                                        </Typography>
                                        <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>
                                            Votes are counted, and a parameter’s value is changed gradually during DecayTime after voting. Liquidity providers can change default values separately for each pool. They are determined by liquidity providers using a similar voting system. You can vote or change your vote at any time.
                                        </Typography>
                                    </Stack>
                                </Grid>
                                :
                                <Grid container md={7.8} xs={12} justifyContent="space-between">
                                    {['Swap Fee', 'Decay Time', 'Price Impact Fee'].map((data, index) => (
                                        <Grid xs={12} sm={3.95} md={3.95} sx={{ pt: `${matches600 ? 0 : 8}px` }} key={index}>
                                            <PoolPaper variant='outlined' sx={{ p: "6px 12px 12px" }}>
                                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                    <Typography>{data}</Typography>
                                                    <IconButton onClick={() => openDetail_1(data)}><Typography component="img" src={detailIcon} /></IconButton>
                                                </Stack>
                                                <Stack direction="row" justifyContent="center" sx={{ mb: "25px", mt: "10px" }}>
                                                    <Typography component="img" src={ellipse} sx={{ maxWidth: "100%" }} />
                                                </Stack>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Total Votes</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>$31,313,245.577</Typography>
                                                </Stack>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Addresses</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>25</Typography>
                                                </Stack>
                                            </PoolPaper>
                                        </Grid>
                                    ))
                                    }
                                </Grid>
                            }
                            <Grid md={4.2} xs={12} sx={{ pl: `${matches900 ? 2.2 : 0}%`, pt: `${matches900 ? 0 : 8}px` }}>
                                {detailState_1 ?
                                    <Stack>
                                        <Typography sx={{ fontSize: "14px", m: "10px 0" }}>How it works?</Typography>
                                        <Typography sx={{ fontSize: "12px", color: "#7E8B74" }}>
                                            1INCH liquidity protocol is a constant-product AMM with the addition of virtual balances. Virtual balances were introduced to redirect some arbitrageur profits to liquidity provider. The pool parameter is regulated by Mooniswap formulas.
                                        </Typography>
                                    </Stack>
                                    :
                                    <PoolPaper variant='outlined' sx={{ p: `25px ${matches600 ? 8 : 5}%` }}>
                                        <Stack direction="row" alignItems="center">
                                            <Typography component="img" src={detailData[0].logo}></Typography>
                                            <Typography component="img" src={detailData[1].logo} sx={{ ml: "-8px" }}></Typography>&nbsp;&nbsp;
                                            <Typography>{detailData[0].name}-{detailData[1].name}&nbsp;Pool</Typography>
                                        </Stack>
                                        <Stack sx={{ m: "25px 0 14px" }}>
                                            <Typography sx={{ fontSize: "14px", mb: "8px" }}>What more LST tokens?</Typography>
                                            <Typography sx={{ fontSize: "14px", color: "#7E8B74" }}>Step 1. Choose one of the farming pools</Typography>
                                            <Typography sx={{ fontSize: "14px", color: "#7E8B74" }}>Step 2. Provide Liquidity and receive your LP Tokens</Typography>
                                            <Typography sx={{ fontSize: "14px", color: "#7E8B74" }}>Step 3. Stake Your LP Tokens</Typography>
                                        </Stack>
                                        <Button variant='contained' sx={{ color: "white", width: "100%", borderRadius: "12px" }}>connect wallet</Button>
                                    </PoolPaper>
                                }
                            </Grid>
                        </Grid>
                    </Box>
                    :
                    <Box sx={{ overflow: "auto" }}>
                        <Box sx={{ minWidth: "900px" }}>
                            <Stack direction="row" sx={{ width: "100%", p: "10px 0" }} justifyContent="space-between">
                                <Typography sx={{ width: "51%", fontSize: "18px", color: "#7E8B74" }}>Pool</Typography>
                                <Typography sx={{ width: "20%", fontSize: "18px", color: "#7E8B74" }}>Liquidity</Typography>
                                <Typography sx={{ width: "19%", fontSize: "18px", color: "#7E8B74" }}>APY</Typography>
                                <Typography sx={{ width: "10%", fontSize: "18px", color: "#7E8B74" }}></Typography>
                            </Stack>
                            {staking.map((data, index) => (
                                <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} key={index} sx={{ background: "transparent" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        sx={{ p: "12px 0" }}
                                    >
                                        <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
                                            <Stack direction="row" alignItems="center" sx={{ width: "18%" }}>
                                                <Avatar sx={{width:"30px", height:"30px"}} src={Tx} />&nbsp;&nbsp;
                                                <Typography>0x88...94cb</Typography>
                                            </Stack>
                                            <Stack direction="row" alignItems="center" sx={{ width: "12%" }}>
                                                <Avatar sx={{width:"30px", height:"30px"}} src={Chains[0].tokens[index % Chains[0].tokens.length].logoURI} />&nbsp;&nbsp;
                                                <Stack direction="column">
                                                    <Typography>{Chains[0].tokens[index % Chains[0].tokens.length].symbol}</Typography>
                                                    <Typography sx={{ color: "#7E8B74" }}>50%</Typography>
                                                </Stack>
                                            </Stack>
                                            <Stack direction="row" alignItems="center" sx={{ width: "22%" }}>
                                                <Avatar sx={{width:"30px", height:"30px"}} src={Chains[0].tokens[index % Chains[0].tokens.length + 1 === Chains[0].tokens.length ? 0 : index % Chains[0].tokens.length + 1].logoURI} />&nbsp;&nbsp;
                                                <Stack direction="column">
                                                    <Typography>{Chains[0].tokens[index % Chains[0].tokens.length + 1 === Chains[0].tokens.length ? 0 : index % Chains[0].tokens.length + 1].symbol}</Typography>
                                                    <Typography sx={{ color: "#7E8B74" }}>50%</Typography>
                                                </Stack>
                                            </Stack>
                                            <Typography sx={{ width: "20%" }}>$314,472,864</Typography>
                                            <Stack direction="row" alignItems="center" sx={{ width: "20%" }}>
                                                <Typography>23.04%</Typography>&nbsp;
                                                <InfoOutlinedIcon sx={{ fontSize: "16px", color: "#7E8B74" }} />
                                            </Stack>
                                            <Stack direction="row" justifyContent="flex-end" sx={{ width: "8%" }}>
                                                <Button onClick={() => openDetail(Chains[0].tokens[index % Chains[0].tokens.length], Chains[0].tokens[index % Chains[0].tokens.length + 1 === Chains[0].tokens.length ? 0 : index % Chains[0].tokens.length + 1])} sx={{ background: "linear-gradient(279.93deg, #262626 0%, rgba(54, 51, 51, 0.99) 100%)", minWidth: "0", width: "40px", mr: "15px", p: "10px 0", borderRadius: "10px" }}><Typography component="img" src={pool} /></Button>
                                            </Stack>
                                        </Stack>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container justifyContent="space-between">
                                            <Grid md={8}>

                                            </Grid>
                                            <Grid md={3.9}>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Liquidity</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>$6,785,673</Typography>
                                                </Stack>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Volume (24h)</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>$31,313</Typography>
                                                </Stack>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Earnings (24h)</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>$217</Typography>
                                                </Stack>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px", mt: "20px" }}>Total APY</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>22.59%</Typography>
                                                </Stack>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px", ml: "12px" }}> – Pool APY</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>22.59%</Typography>
                                                </Stack>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px", ml: "12px" }}> – LDO Farming APY</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>22.59%</Typography>
                                                </Stack>
                                                <Button variant='contained' sx={{width:"100%",color:"white", mt:"22px", borderRadius:"12px"}}>connect&nbsp;wallet</Button>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </Box>
                }
            </Grid>
            <Cwallet poolCreateDialogState={poolCreateDialogState} setPoolCreateDialogState={setPoolCreateDialogState} chain={chain} />
        </Box>
    );
}