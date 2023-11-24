import { View, Text, Button, ViewProps } from '@tarojs/components'
import MarkdownRender from '@/components/MarkdownRender'
import { cx } from 'class-variance-authority'
import { useState } from 'react'

export default () => {
  const [visible, setVisible] = useState(false)
  const onClick = () => {
    setVisible((x) => {
      return !x
    })
  }
  return (
    <View>
      <View className='subtitle'>默认使用</View>
      <MarkdownRender className='flex gap-1 items-center text-sm'>
        <View
          className={cx('toast', {
            'opacity-10': visible
          })}
          onClick={onClick}
        >
          <View className='alert alert-primary'>
            <View>你有一封新的邮件</View>
          </View>
        </View>
        <View
          className={cx('toast toast-bottom toast-start', {
            'opacity-10': visible
          })}
          onClick={onClick}
        >
          <View className='alert alert-error'>
            <View>丢弃</View>
          </View>
        </View>
        <View
          className={cx('toast toast-middle toast-center', {
            'opacity-10': visible
          })}
          onClick={onClick}
        >
          <View className='alert alert-success'>
            <View>点击任意一个提示可隐藏</View>
          </View>
        </View>
        {/* <View className='toast toast-top toast-center'>
          <View className='alert alert-primary'>
            <View>你有一封新的邮件</View>
          </View>
        </View>
        <View className='toast toast-top toast-end'>
          <View className='alert alert-primary'>
            <View>你有一封新的邮件</View>
          </View>
        </View> */}
      </MarkdownRender>
    </View>
  )
}
