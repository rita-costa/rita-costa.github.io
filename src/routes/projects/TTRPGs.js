import React from "react";
import { Button, Grid2, Stack } from "@mui/material";
import Heading1 from "../../components/Typography/Heading1";
import Heading2 from "../../components/Typography/Heading2";
import ProjectTitle from "../../components/ProjectTitle";
import Body from "../../components/Typography/Body";
import Bullet from "../../components/Bullet";
import ProjectBox from "../../components/ProjectBox";

export default function TTRPGs() {
  return (
    <Stack alignItems={"left"}>
      <ProjectTitle
        title="Virtual Realms: How the Online Medium Affects Character Immersion in Remote Tabletop Role-Playing Games"
        info="MSc HCI Dissertation 2024, Best Project Prize"
        skills={["Qualitative User Research", "Academic Writing"]}
      />

      <Heading1>Summary</Heading1>

      <Stack
        direction="row"
        alignItems="flex-start"
        spacing={20}
        sx={{ padding: "1rem" }}>
        <Stack direction="column" sx={{ width: "100%" }}>
          <Heading2>Mission</Heading2>
          <Body>
            For my final dissertation project in the HCI MSc at UCL, I examined
            how the shift of Tabletop roleplaying games (TTRPGs) into online
            spaces has shaped players’ character immersion. TTRPGs are known to
            support wellbeing and identity exploration, with immersion at the
            core of these benefits. While these dynamics are well understood in
            co-located play, the rapid growth of remote play since the pandemic
            has introduced new challenges and opportunities that remain
            under-explored in HCI.
          </Body>

          <Heading2>My Approach</Heading2>
          <Stack direction="column" spacing={1}>
            <Body>
              Over five months, I independently conducted a qualitative
              elicitation study using diaries and interviews to capture players'
              experiences without disrupting gameplay. I was responsible for:
            </Body>
            <Bullet>Defining a feasible research scope and methodology</Bullet>
            <Bullet>
              Conducting an interview and diary study with nine participants
            </Bullet>
            <Bullet>
              Analysing 19+ transcripts through Reflexive Thematic Analysis
            </Bullet>
            <Bullet>
              Synthesising these insights into actionable design directions for
              researchers and designers
            </Bullet>
          </Stack>
        </Stack>

        <ProjectBox>
          <Stack spacing={4}>
            <Stack>
              <Heading2>Timeframe</Heading2>
              <Body>5 months</Body>
            </Stack>

            <Stack>
              <Heading2>Skills</Heading2>
              <Body>
                Semi-structured interviews, diary studies, reflexive thematic
                analysis
              </Body>
            </Stack>

            <Stack>
              <Heading2>Impact</Heading2>
              <Body>MSc HCI Best Project Prize, submitted to CHI 2026</Body>
            </Stack>

            <Button variant="contained" color="primary" href="">
              Download report
            </Button>
          </Stack>
        </ProjectBox>
      </Stack>

      <Heading1>Process</Heading1>
      <Heading2>Research Questions</Heading2>
      <ProjectBox>
        <Stack direction="row" width={"100%"} justifyContent={"center"}>
          <b>
            How does the online medium and its affordances affect players’
            character immersion in remote TTRPGs?
          </b>
        </Stack>

        <Stack direction="row" spacing={4}>
          <ProjectBox isSecondary>
            (a) How do players leverage online features for character immersion
            in a remote setting?
          </ProjectBox>
          <ProjectBox isSecondary>
            (b) What aspects of the online medium help or hinder character
            immersion?
          </ProjectBox>
          <ProjectBox isSecondary>
            (c) How can online platforms be improved to enhance character
            immersion?
          </ProjectBox>
        </Stack>
      </ProjectBox>

      <Stack direction="column" sx={{ width: "60%" }}>
        <Heading2>Methodology</Heading2>
        <Stack>
          <Body>
            As character immersion is so personal to each player I needed a
            method to elicit rich reflections while minimising intrusion to the
            gameplay experience. Because of this, I chose not to record play
            sessions, instead asking for players to add artefacts to diary
            entries.
          </Body>

          <Stack direction={"row"}>
            <ProjectBox>
              <Body>Post-session Diaries (x2)</Body>
              <Body>
                Almost immediate reflections after a play session to capture
                specific interactions while they are still fresh, while not
                affecting the game experience by recording play itself. Players
                were also asked to share screenshots of parts of the session and
                digital tools to better understand the play context.
              </Body>
            </ProjectBox>

            <ProjectBox>
              <Body>Interviews (x2)</Body>
              <Body>
                Gathered general views in an introductory interview to
                understand feelings around remote play and explored themes
                mentioned in diaries further (after a preliminary analysis) in a
                follow-up interview, using diaries as probes to elicit deeper
                reflection.
              </Body>
            </ProjectBox>
          </Stack>

          <Body>
            <b>A hiccup: paired interviews</b>
            <br />
            My initial plan was to interview players in pairs from the same game
            to compare perspectives on shared experiences. However, recruitment
            challenges meant this was only possible for two pairs, but these
            still provided valuable contrast and conversational depth by created
            opportunities for discussion of differing experiences.
          </Body>
        </Stack>
      </Stack>

      <Stack direction="column">
        <Heading2>Analysis</Heading2>
        <Body sx={{ width: "60%" }}>
          I used Reflexive Thematic Analysis (Braun & Clarke), conducting rounds
          of open coding using NVivo until these generated overarching themes.
          As an experienced TTRPG player myself, I could deeply engage and
          reflect on themes as an ‘insider’ to TTRPG culture. However,
          discussing these themes with my supervisor ensured they were grounded
          and understandable to a wider audience (designers, academics, etc.).
        </Body>

        <Stack direction="row">
          <ProjectBox isSecondary>
            Many Channels, Richer Channels
            <br />
            <Body>
              Online, players have access to audio-visual tools and multiple
              channels, which facilitate richer ways to engage in character,
              such as sharing audio, images, and texting in-character. These
              channels also separated non-narrative aspects from the main
              channel, such as through automated dice calculations, map
              visualisations, and text channels, allowing for sustained focus on
              the story and characters.
            </Body>
          </ProjectBox>

          <ProjectBox isSecondary>
            Dice & Physicality
            <br />
            <Body>
              Embodied aspects of play - especially rolling dice - were seen as
              essential for players to feel involved in the story and their
              characters. This contrasts with other game literature that argues
              that exposing mechanics creates friction to immersion. While
              players found virtual dice calculators convenient, there was a
              strong preference for a tactile and manual approach, as by bodily
              involving themselves, they could more easily evoke emotions
              related to the story.
            </Body>
          </ProjectBox>

          <ProjectBox isSecondary>
            Alibi vs Validation
            <br />
            <Body>
              An important finding was of a tension borne of the physical and
              social distance between players. On one hand, this helped players
              feel less observed and more confident to roleplay more intensely -
              having a stronger ‘alibi’, as discussed in previous roleplay
              literature. However, this also prevented players from feeling
              reassured others were consistently paying attention and receptive
              to their character representations through physical indicators
              like eye contact.
            </Body>
          </ProjectBox>
        </Stack>
      </Stack>

      <Stack direction="column" width="60%">
        <Heading1>Outcomes</Heading1>
        <Heading2>Design Directions</Heading2>
        <Body sx={{ width: "100%" }}>
          From these themes, I outlined 5 specific design directions for
          character immersion in remote TTRPGs. These directions for future work
          can be leveraged by both researchers and TTRPG designers to either
          test or design TTRPGs that are more specifically adapted to remote
          play, and play into the specific constraints and tensions that this
          medium provides.
        </Body>

        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <ProjectBox isSecondary>
              Balance social and character presence
              <br />
              <Body>
                Explore features that balance distance for confidence and
                helping players feel seen, through animated avatars, voice
                changing software, or spatial audio.
              </Body>
            </ProjectBox>
          </Grid2>

          <Grid2 size={6}>
            <ProjectBox isSecondary>
              Leverage separate communication channels
              <br />
              <Body>
                Maintain separate channels to differentiate between narrative
                and non-narrative aspects, and work to reduce friction of
                switching between these.
              </Body>
            </ProjectBox>
          </Grid2>

          <Grid2 size={6}>
            <ProjectBox isSecondary>
              Enhance embodiment
              <br />
              <Body>
                Explore how to maintain a physical component while introducing
                the convenience of virtual tools, possibly through wearable
                devices or enhanced physical dice.
              </Body>
            </ProjectBox>
          </Grid2>

          <Grid2 size={6}>
            <ProjectBox isSecondary>
              Leverage audio-visual tools further
              <br />
              <Body>
                Explore how the abundance of digital tools can make the sensory
                experience of play more immersive, for example, through AI
                playlists.
              </Body>
            </ProjectBox>
          </Grid2>

          <Grid2 size={6}>
            <ProjectBox isSecondary>
              Adapt TTRPG design to remote settings
              <br />
              <Body>
                Consider creating TTRPGs that explicitly leverage the
                constraints of the online medium into their story - for example
                ViewScream whose story is centred around video calls within a
                spaceship.\
              </Body>
            </ProjectBox>
          </Grid2>
        </Grid2>

        <Heading2>MSc Project Prize</Heading2>
        <Body>
          This project won the MSc Project Prize of the 2024 Human-Computer
          Interaction course at UCL - as the highest scored dissertation - and
          is currently under submission for the ACM CHI 2026 conference.
        </Body>
        <Button variant="contained" color="primary" href="">
          Download it here
        </Button>
      </Stack>

      <Stack direction="column" width="60%">
        <Heading1>Learning</Heading1>
        <Heading2>Plan for inconsistency</Heading2>
        <Body>
          Longitudinal studies can be especially effective for deeply exploring
          users’ internal experiences, especially if if is about an experience
          that happens regularly. However, life does get in the way. It was
          difficult to recruit player pairs and collect two diary entries for
          each participant, especially since it relied on a group activity that
          is often rescheduled.
          <br />
          <br />
          Moving forward, I plan to incorporate considerations of buffer time
          for recruitment and between collection and analysis to allow for these
          inconsistencies.
        </Body>

        <Heading2>Artifact collection is rich</Heading2>
        <Body>
          A key part of the study was users’ screenshots of gameplay in diaries.
          The intention was to understand user’s context better when reading
          entries, but they proved invaluable as prompts in follow-up
          interviews. Having a specific image to ask about surfaced aspects that
          participants overlooked when recounting play and acted as a probe for
          participants to be transported back to a specific game moment,
          allowing for richer recollections and reflections in interviews.
          <br />
          <br />
          Users tend to be more impatient with writing qualitative diary
          entries, so collecting artifacts in the process allows for richer
          reflections in follow-up interviews, which could be missed with only
          the text.
        </Body>
      </Stack>
    </Stack>
  );
}
