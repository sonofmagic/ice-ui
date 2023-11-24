import { View, Switch } from '@tarojs/components'
// import './toggle.scss'
import MarkdownRender from '@/components/MarkdownRender'

export default () => {
  return (
    <View>
      <View className='subtitle'>微信平台默认样式</View>
      <View className='grid grid-cols-3 gap-2'>
        <Switch checked></Switch>
      </View>
      <View className='subtitle'>颜色类型</View>
      <MarkdownRender className='grid grid-cols-3 gap-2'>
        <Switch className='toggle ' checked></Switch>
        <Switch className='toggle toggle-primary' checked></Switch>
        <Switch className='toggle toggle-success' checked></Switch>
        <Switch className='toggle toggle-warning' checked></Switch>
        <Switch className='toggle toggle-error' checked></Switch>
        <Switch className='toggle toggle-neutral' checked></Switch>
      </MarkdownRender>
      <View className='subtitle'>禁用</View>
      <MarkdownRender className='grid grid-cols-3 gap-2'>
        <Switch className='toggle toggle-disabled' disabled checked></Switch>
      </MarkdownRender>
      <View className='subtitle'>尺寸</View>
      <MarkdownRender className='grid grid-cols-2 gap-2'>
        <Switch className='toggle toggle-xs'></Switch>
        <Switch className='toggle toggle-sm'></Switch>
        <Switch className='toggle toggle-md'></Switch>
        <Switch className='toggle toggle-lg'></Switch>
      </MarkdownRender>
    </View>
  )
}
