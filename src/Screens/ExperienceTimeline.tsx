import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color } from '../Theme';
import { Typography } from '../Theme/Typography';
import { moderateScale, scale } from '../Theme/ResposiveSize';

type ExperienceItem = {
  title: string;
  description: string;
  duration: string;
};

type ExperienceTimelineProps = {
  experiences: ExperienceItem[];
};

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <View style={styles.container}>
      {experiences.map((experience, index) => (
        <View key={index} style={styles.timelineItem}>
          <View style={styles.timelineLine}>
            <View style={styles.timelineDot} />
            {index !== experiences.length - 1 && <View style={styles.timelineConnector} />}
          </View>
          <View style={styles.contentContainer}>
            <Text style={[Typography.samll_bold, styles.title]}>{experience.title}</Text>
            <Text style={[Typography.title, styles.description]}>{experience.description}</Text>
            <Text style={[Typography.small, styles.duration]}>{experience.duration}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(15),
    marginTop: scale(10),
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: scale(20),
  },
  timelineLine: {
    alignItems: 'center',
    marginRight: scale(15),
  },
  timelineDot: {
    width: scale(12),
    height: scale(12),
    borderRadius: scale(6),
    backgroundColor: Color.orange,
  },
  timelineConnector: {
    width: scale(2),
    flex: 1,
    backgroundColor: Color.orange,
    marginVertical: scale(5),
  },
  contentContainer: {
    flex: 1,
    paddingBottom: scale(15),
  },
  title: {
    color: Color.black,
    marginBottom: scale(5),
  },
  description: {
    color: Color.chatBg,
    marginBottom: scale(5),
  },
  duration: {
    color: Color.chatBg,
  },
});

export default ExperienceTimeline;

