
<script setup>
let list = [
    { number: "SP01-020", url: "/packs/SP01" },
    { number: "2AGB-018", url: "/packs/2AGB" }
]
</script>

# 充能MAX

**属性**：<CardAttribute text="电"/><br/>
**等级**：2

## 效果

### 【启动】

:::info 2AGB
支付最多3点LP并选择场上1张卡灵卡为目标可发动。目标卡灵AP上升支付的数值（至该回合结束）。
:::

:::info 旧版本 SP01
&emsp;&emsp;支付最多5点LP并选择场上1张卡灵卡为目标可以发动。直到该回合结束阶段，目标卡灵AP上升支付的数值。
:::

### 【启动】

:::info 2AGB
选择场上1张卡灵卡为目标可发动。目标卡灵AP上升场上其他1张我方卡拉卡的AP值（至该回合结束）。该回合目标卡灵以外的卡灵不能攻击。
:::

:::info 旧版本 SP01
&emsp;&emsp;选择场上1张卡灵卡为目标可以发动。直到该回合结束阶段，目标卡灵AP上升场上其他我们卡灵AP合计值。该回合目标卡灵以外的卡灵不能攻击。
:::

## 编号版本

<CardNumberBox :list="list"/>
